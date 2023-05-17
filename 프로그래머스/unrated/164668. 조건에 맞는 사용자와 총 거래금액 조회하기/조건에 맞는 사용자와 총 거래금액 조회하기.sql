-- 코드를 입력하세요
select * from (SELECT b.USER_ID, b.NICKNAME, SUM(a.PRICE) as TOTAL_SALES from (select * from USED_GOODS_BOARD where status ='DONE') as a
    inner join USED_GOODS_USER as b on a.writer_id = b.user_ID group by WRITER_ID) as a where a.TOTAL_SALES >= 700000 order by total_sales