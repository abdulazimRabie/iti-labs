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


-- -- Versatile Actors
with category_table(id) as (
	select category_id from category
	where name = 'Action' or name = 'Drama'
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
	where category_id in (select id from category_table)
)
-- , actor_of_action(actor_id, actor_name, total_count) as (
	-- select actor_id, actor_name, count(*) as 'total_count' from film_actor_category_table
	--  group by actor_id, actor_name
	-- 	having count(*) > 5
	-- 	order by actor_id
-- )
select * from film_actor_category_table
order by actor_id
;

-- title | file_id | category_id | actor_id | actor_name
--       |         |     1       |  2       |
--       |         |     7       |  2       |















