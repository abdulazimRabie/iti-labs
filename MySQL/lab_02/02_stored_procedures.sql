-- stored procedures
-- 4, from customer_id ====> full name, email, full address, and city of that customer

delimiter -
create procedure get_details_of_customer(in id int)
begin

	select
		concat(first_name, ' ', last_name) as 'full_name',
        email,
        address,
        city
	from customer as cust
    join address  as addr on cust.address_id = addr.address_id
    join city on city.city_id = addr.city_id
    where customer_id = id;
end -
delimiter ;

drop procedure get_details_of_customer;
select * from customer where customer_id = 1;

call get_details_of_customer(1);


-- 5, total_revenue of store in period end---start

delimiter -
create procedure revenue_between_dates_of_stores(in start_date datetime, in end_date datetime)
begin
	select store.store_id, sum(amount)
	from rental
	join payment on payment.rental_id = rental.rental_id
	join staff on staff.staff_id = payment.staff_id
	join store on store.store_id = staff.store_id
	where rental.rental_date between start_date and end_date
	group by store.store_id;
end -
delimiter ;

call revenue_between_dates_of_stores('2005-05-25', '2005-05-28')



-- 6, look for film title that contains `thisString`

delimiter -
create procedure get_films_contains(in substring varchar(50))
begin
	select *
    from film
    where title like concat('%', substring, '%');
end -
delimiter ;

call get_films_contains('dark');

-- 7, which category the customer rents more

delimiter -
create procedure most_rented_category(in id int)
begin
	select category.name, count(*) as total_count
	from customer as cust
	join rental on rental.customer_id = cust.customer_id
	join inventory as inven on inven.inventory_id = rental.inventory_id
	join film_category on film_category.film_id = inven.film_id
	join category on category.category_id = film_category.category_id
	where cust.customer_id = id
	group by category.category_id,category.name
    order by total_count desc
    limit 1;
end -
delimiter ;

call most_rented_category(1);













