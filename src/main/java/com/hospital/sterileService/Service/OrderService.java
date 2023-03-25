package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Order;
import com.hospital.sterileService.Model.Staff;
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
    public List<Order> getOrdersByCustomerId(Integer customerId) {
        return orderRepository.findByCustomerId(customerId);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public List<Order> getAllByStaff(Integer id) {
        return orderRepository.findByStaffId(id);
    }

    @Override
    public Order getOrder(Integer id) {
        return orderRepository.findById(id).orElse(null);
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

    @Override
    public String acceptOrder(Integer id) {
        if(orderRepository.findById(id).isPresent()) {
            Order order = orderRepository.findById(id).get();
            order.setAccepted(true);
            orderRepository.save(order);

            return "Order has been accepted";

        }  else {
            return "Order not found";
        }
    }

    @Override
    public Boolean checkOrderStatus(Integer id) {
        if(orderRepository.findById(id).isPresent()) {
            Order order = orderRepository.findById(id).get();
            return order.getAccepted();

        }  else {
            return false;
        }
    }

    @Override
    public String assignStaff(Integer id, Staff staff) {
        if(orderRepository.findById(id).isPresent()) {
            Order order = orderRepository.findById(id).get();
            System.out.println(staff.getName());
            order.setStaff(staff);
            orderRepository.save(order);
            System.out.println(order.getStaff().getName());
            return "Staff has been assigned";
        } else {
            return "Order not found";
        }
    }


}

