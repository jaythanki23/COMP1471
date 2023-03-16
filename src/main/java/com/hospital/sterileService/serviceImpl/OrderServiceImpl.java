package com.hospital.sterileService.serviceImpl;

import com.hospital.sterileService.entity.OrderDTO;
import com.hospital.sterileService.entity.TrayDTO;
import com.hospital.sterileService.repository.OrderRepository;
import com.hospital.sterileService.service.OrderService;
import com.hospital.sterileService.utils.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public OrderDTO createOrder(OrderDTO orderDTO) {
        return orderRepository.save(orderDTO);
    }

    @Override
    public List<OrderDTO> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Optional getOrder(Long order_id) {
        return orderRepository.findById(order_id);
    }

    @Override
    public OrderDTO deleteOrder(Long order_id) throws ObjectNotFoundException {
        Optional<OrderDTO> orderDTO = orderRepository.findById(order_id);
        if (orderDTO.isPresent()) orderRepository.delete(orderDTO.get());
        else throw new ObjectNotFoundException("Invalid order id : "+ order_id);
        return orderDTO.get();
    }
}
