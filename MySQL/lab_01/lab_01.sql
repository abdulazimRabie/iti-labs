use sakila;

-- 1
select title, description, length
from film
where length > 120
order by length asc;


-- 2 Find all films that have a rental_rate of 0.99 or 2.99, but their
-- replacement_cost is greater than 20.00

select *
from film
where (rental_rate = 0.99 or rental_rate = 2.9) and replacement_cost > 20.00;


-- 3 Count the total number of films available in each rating (G, PG, R, etc.)
select rating , count(*)
from film
group by rating;


-- 4 List the customer_ids who have made more than 30 separate payments in the
-- payment table.
select customer_id , count(*)
from payment
group by customer_id
having count(*) > 30;

-- 5 Get all "Cities" in the database and the "Country" they belong to, but only
-- for cities located in 'Egypt'

select city from city
where country_id = (
	select country_id from country
	where country = 'Egypt'
);

select city, country
from city
join country on city.country_id = country.country_id
where country = 'Egypt';

-- 6 Display a list of all films and the names of the actors who starred in them.
-- (show film id, title and actor name)

select film.film_id, title, CONCAT(first_name , ' ' , last_name) as ' actor name'
from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
order by title;



-- 7 Find all customers who have rented a movie but haven't returned it yet.
-- (show the customer name and the film title).
select customer.first_name, film.title
from customer
join rental on customer.customer_id = rental.customer_id
join inventory on inventory.inventory_id = rental.inventory_id
join film on film.film_id = inventory.film_id
where rental.return_date is null
;

-- select * from rental
-- where return_date is null;


-- 8 List the titles of all films whose length is greater than the average length of
-- all films in the database.

with avg_len(len) as (
	select avg(length)
	from film
)
select title , length
from film
where length > (SELECT len FROM avg_len)
order by length;

-- 9 Write a query to find the first_name, last_name, and email of customers who
-- have zero rental records

select *
from customer
left join rental on customer.customer_id = rental.customer_id
where rental.rental_id is null;

SELECT
	c.customer_id,
    c.first_name, 
    c.last_name, 
    c.email
FROM customer c
LEFT JOIN rental r ON c.customer_id = r.customer_id;

-- 10 10.Create a view named customer_spending_summary. This view should
-- display each customer's name, their total number of rentals, and the total
-- amount of money they have paid.

-- select   -- rental.customer_id, rental.rental_id, payment.amount 
create view customer_spending_summary as (
	select 
		rental.customer_id, 
        concat(customer.first_name, ' ' ,customer.last_name) as 'name', 
        count(*) as 'total_count', 
        sum(amount) as 'total_amount' 
	from rental
	join payment on rental.rental_id = payment.rental_id
	join customer on customer.customer_id = rental.customer_id
	group by rental.customer_id, customer.first_name, customer.last_name
	order by rental.customer_id
);

select * from customer_spending_summary
order by total_amount asc;


-- 11 Use the previous view to find only customers who spent more than $100
select * from
customer_spending_summary
where total_amount > 100
order by total_amount asc


