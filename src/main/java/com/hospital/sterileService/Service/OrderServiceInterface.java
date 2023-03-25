package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Order;
import com.hospital.sterileService.Model.Staff;

import java.util.List;

public interface OrderServiceInterface {
    List<Order> getOrdersByCustomerId(Integer customerId);

    List<Order> getAllOrders();

    List<Order> getAllByStaff(Integer id);

    Order getOrder(Integer id);

    Order createOrder(Order order);

    String deleteOrder(Integer id);

    String acceptOrder(Integer id);

    Boolean checkOrderStatus(Integer id);

    String assignStaff(Integer id, Staff staff);
}
