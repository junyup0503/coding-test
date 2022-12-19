-- 코드를 입력하세요
Select cart_id from (SELECT cart_id, name from cart_products where name in('Milk', 'Yogurt') group by cart_id, name) group by cart_id having count(*) = 2 order by cart_id