-- user-defined functions
-- 1, get full name of actor

use sakila;
select * from actor;

delimiter /
create function get_full_name_actor(id int)
returns varchar(100)
not deterministic
reads sql data 
begin
	declare full_name varchar(100);
    select concat(first_name, ' ', last_name) into full_name
    from actor
    where actor_id = id;

    return full_name;
end /
delimiter ;

set @actor_id = 1;
select get_full_name_actor(@actor_id);


-- 2, get total rentals of customer

delimiter /
create function get_total_rentals_of_user(id int)
returns int 
reads sql data
begin
	declare total_rentals int;
    
    select count(*) into total_rentals
    from rental
    where customer_id = id;

	return total_rentals;
end /
delimiter ;

set @customer_id = 1;
select get_total_rentals_of_user(@customer_id);

select count(*) from rental
where customer_id = 1;


-- 3, put $ before decimal value

create function put_$_before(value decimal)
returns text
deterministic
return concat('$', value);

select put_$_before(13.21)


