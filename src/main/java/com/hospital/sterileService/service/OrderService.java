package com.hospital.sterileService.service;

import com.hospital.sterileService.entity.OrderDTO;
import com.hospital.sterileService.utils.exception.ObjectNotFoundException;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    OrderDTO createOrder(OrderDTO orderDTO);
    List<OrderDTO> getAllOrders();
    Optional getOrder(Long order_id);
    OrderDTO deleteOrder(Long order_id) throws ObjectNotFoundException;
}
