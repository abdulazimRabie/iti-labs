-- Triggers

-- 8, before address is updated , set `last_udate` = now()

select * from address;

-- -THIS SOLUTION LEADS TO RECURSION
delimiter -
create trigger update_last_update
before update on address
for each row
begin
	update address
    set last_update = now()
    where address_id = old.address_id;
end -
delimiter ;

drop trigger update_last_update;

-- AFTER SEARCH I FOUND THAT SETTING VALUE IS MOST SUITABLE SOLUTINO

delimiter -
create trigger set_last_update_to_now
before update on address
for each row
begin
	set new.last_update = now();
end -
delimiter ;

update address
set phone = '0101001'
where address_id = 1;

select * from address where address_id = 1;


-- 9, before update staff , username cannot be 'admin'
select * from staff limit 1;

delimiter -
create trigger prevent_staff_admin
before update on staff
for each row
begin
	if new.username = 'admin' then
		signal sqlstate '45000'
        set MESSAGE_TEXT = 'STAFF CANNOT BE ADMIN';
    end if;
end -
delimiter ;

update staff
set username = 'ADMIN'
where staff_id = 1;


-- 10, before insert emial of customer , ensure it contains @ and .alter 
delimiter -
create trigger validate_email
before insert on customer
for each row
begin
	if new.email not like '%@%.%' then
		signal sqlstate '45000'
        set MESSAGE_TEXT = 'IT IS NOT A VALID EMAIL';
    end if;
end -
delimiter ;

select * from customer where customer_id = 99; 
select * from customer where email not like '%@%.%'; 

update customer 
set email = 'notvalidemail'
where customer_id = 99;

insert into customer values(999,1, 'azim', 'rabie', 'notvalidemail', 3, 1, now(), now());


-- 11, film_price_history table to track prices of film
create table film_price_history(
    old_price decimal(4,2),
    new_price decimal(4,2),
    film_id smallint unsigned,
	constraint film_price_fk
		foreign key (film_id)
		references film(film_id)
);

alter table film_price_history
add column updated_at datetime;


delimiter -
create trigger log_film_price_history
after update on film
for each row
begin
	insert into film_price_history(film_id, old_price, new_price, updated_at)
    values (new.film_id, old.rental_rate, new.rental_rate, now());
end -
delimiter ;

select * from film;

update film
set rental_rate = 40
where film_id = 1;

select * from film_price_history;


