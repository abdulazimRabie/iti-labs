-- -- BOUNS : 1
-- -- WITHOUT CTE
select 
	title, 
    film.film_id, 
    film_category.category_id, 
    concat (actor.first_name, ' ' , actor.last_name ) as 'actor_name'
from film_category
join film on film_category.film_id = film.film_id
join film_actor on film.film_id = film_actor.film_id
join actor on actor.actor_id = film_actor.actor_id
where category_id = (
	select category_id from category
	where name = 'Action'
);

 -- -- WITH CTE 
 with category_table(id) as (
	select category_id from category
	where name = 'Action'
), film_actor_category_table(title, film_id, category_id, actor_id, actor_name) as (
	select 
		title, 
		film.film_id, 
		film_category.category_id, 
        film_actor.actor_id,
		concat (actor.first_name, ' ' , actor.last_name ) as 'actor_name'
	from film_category
	join film on film_category.film_id = film.film_id
	join film_actor on film.film_id = film_actor.film_id
	join actor on actor.actor_id = film_actor.actor_id
	where category_id = (select id from category_table)
)
select actor_id, count(*) from film_actor_category_table
group by actor_id
having count(*) > 10
order by actor_id
;

-- ---------------------------------------------------------
-- ---------------------------------------------------------
-- ---------------------------------------------------------
-- -- Versatile Actors
-- with category_table(id) as (
-- 	select category_id from category
-- 	where name = 'Action' or name = 'Drama'
-- ), film_actor_category_table(title, film_id, category_id, actor_id, actor_name) as (
-- 	select 
-- 		title, 
-- 		film.film_id, 
-- 		film_category.category_id, 
--         film_actor.actor_id,
-- 		concat (actor.first_name, ' ' , actor.last_name ) as 'actor_name'
-- 	from film_category
-- 	join film on film_category.film_id = film.film_id
-- 	join film_actor on film.film_id = film_actor.film_id
-- 	join actor on actor.actor_id = film_actor.actor_id
-- 	where category_id in (select id from category_table)
-- )
-- , actor_of_action(actor_id, actor_name, total_count) as (
	-- select actor_id, actor_name, count(*) as 'total_count' from film_actor_category_table
	--  group by actor_id, actor_name
	-- 	having count(*) > 5
	-- 	order by actor_id
-- )
-- select * from film_actor_category_table
-- order by actor_id
-- ;

-- title | file_id | category_id | actor_id | actor_name
--       |         |     1       |  2       |
--       |         |     7       |  2       |


-- select f_cat.film_id, c.category_id, f_act.actor_id, concat(first_name, ' ', last_name) as 'actor_name'

-- Bons : 2 get actor who appeared in actions 5 times and drama 5 actions
with best_actor_of_action as (
	select actor.actor_id, count(*) as 'total_apperance_action'
	from film_category f_cat
	join category c on f_cat.category_id = c.category_id
	join film_actor f_act on f_act.film_id = f_cat.film_id
	join actor on actor.actor_id = f_act.actor_id
	where c.name = 'Action'
	group by actor.actor_id
	having total_apperance_action > 5
), best_actor_of_drama as (
	select actor.actor_id, count(*) as 'total_apperance_drama'
	from film_category f_cat
	join category c on f_cat.category_id = c.category_id
	join film_actor f_act on f_act.film_id = f_cat.film_id
	join actor on actor.actor_id = f_act.actor_id
	where c.name = 'Drama'
	group by actor.actor_id
	having total_apperance_drama > 5
)

select * 
from best_actor_of_action as actor_action
join best_actor_of_drama as actor_drama on  actor_action.actor_id = actor_drama.actor_id;