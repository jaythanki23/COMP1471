package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Order;

import java.util.List;

public interface OrderServiceInterface {
    List<Order> getAllOrders(Integer customerId);

    Order createOrder(Order order);

    String deleteOrder(Integer id);

    String acceptOrder(Integer id);

    Boolean checkOrderStatus(Integer id);
}
