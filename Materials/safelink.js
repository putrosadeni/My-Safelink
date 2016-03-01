SELECT p.trucker_id, p.truck_size,
                    FROM (
                        SELECT a.order_id, a.trucker_id, a.truck_size, a.truck_no, b.ship_to, 
                        SUM(b.qty_koli) AS jml_koli, a.eta_date, a.request_date, b.remark_order,
                        b.rec_date, b.rec_name, b.return_doc_date
                        FROM order_h a INNER JOIN order_d b ON b.order_id = a.order_id
                        GROUP BY b.delivery_no
                    ) AS p
                    INNER JOIN shipment_d c ON c.order_no = p.order_id
                    GROUP BY c.delivery_no
					
select sum(SumGrouped) from (select SUM( a.qty_problem ) as 'SumGrouped'
    FROM  `order_d_problem` a
LEFT JOIN shipment_d b ON a.pn_no = b.pn_no
GROUP BY b.id_shipment) T1
	
	SELECT a.order_id, SUM( a.qty_problem ) 
FROM  `order_d_problem` a
LEFT JOIN shipment_d b ON a.pn_no = b.pn_no
GROUP BY b.id_shipment

SELECT DN FROM (SELECT id_shipment AS 'DN' FROM shipment_d WHERE order_no='PYID15100001' AND pn_no = '1357947') T1 GROUP BY DN
	
	
	
	SELECT DN FROM 
	(SELECT b.id_shipment AS 'DN'
		FROM  `order_d_problem` a
		LEFT JOIN shipment_d b ON a.pn_no = b.pn_no
		GROUP BY b.id_shipment) datax GROUP BY DN