package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Order;
import com.hospital.sterileService.Repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements OrderServiceInterface {
    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrders(Integer customerId) {
        return orderRepository.findByCustomerId(customerId);
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public String deleteOrder(Integer id) {
        orderRepository.deleteById(id);
        return "Order has been deleted";
    }
}
