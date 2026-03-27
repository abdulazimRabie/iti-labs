-- built-in functions
use sakila;

-- 1, LAST_NAME,First_name
select 
	concat (
    upper(last_name),
    ',',
	substring(first_name, 1, 1),
    lower(substring(first_name, 2))
    )
	
from actor;

-- 2, lower(email), and replace domain @sakilacustomer.org with @iti-students.edu.
select lower(replace(email, "@sakilacustomer.org", '@iti-students.edu')) from customer;

-- 3, show only 50 character of film descriptions followed by '...'

-- no film description less than 50
select length(description) from film
where length(description) < 50; 

select 
	length (substring(description, 1, 50))
from film; -- made sure that 50 is inclusive

select 
	concat(substring(description, 1, 50), '...') as 'short_description' 
from film;

-- 4, customers who registerd in februaray

select 
	*
from customer
where month(create_date) = 2;

-- 5, quarter revenue
with total_amount_per_quareter(total_amount, year_date, year_quarter) as (
	select 
		sum(amount) as total_amount,
		year(payment_date) as year_date,
		quarter(payment_date) as year_quarter
	from payment
	group by year_date,year_quarter
), max_revenue_per_year(max_revenue, year_date) as (
	select 
		max(total_amount) as max_revenue , 
        year_date
	from total_amount_per_quareter
	group by year_date
)

select 
	tq.year_date,
	tq.year_quarter, 
    _max.max_revenue
from total_amount_per_quareter as tq
join max_revenue_per_year as _max 
	on  tq.year_date = _max.year_date 
    and tq.total_amount = _max.max_revenue;

-- 5, label over rentals Cheap' (under $2), 'Mid' ($2-$4.99), or 'Expensive'(above $5)

select 
	rental.rental_id,
    payment.amount,
    case
		when payment.amount < 2 then 'Cheap'
        when payment.amount  >=2 and payment.amount < 5 then 'Mid'
        when payment.amount  >= 5 then 'Expensive'
    end as 'It is'
from rental
join payment on payment.rental_id = rental.rental_id