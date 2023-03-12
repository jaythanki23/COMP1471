package com.hospital.sterileService.Controller;

import java.util.List;

import com.hospital.sterileService.Model.Order;
import com.hospital.sterileService.Service.OrderServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    private OrderServiceInterface orderService;

    public OrderController(OrderServiceInterface orderService) {
        this.orderService = orderService;
    }

    @GetMapping("{id}")
    public ResponseEntity<List<Order>> getAllOrders(@PathVariable("id") Integer customerId) {
        return new ResponseEntity<List<Order>>(orderService.getAllOrders(customerId), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        return new ResponseEntity<Order>(orderService.createOrder(order), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(orderService.deleteOrder(id), HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> acceptOrder(@PathVariable("id") Integer id) {
        return new ResponseEntity<String>(orderService.acceptOrder(id), HttpStatus.ACCEPTED);
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<Boolean> checkOrderStatus(@PathVariable("id") Integer id) {
        return new ResponseEntity<Boolean>(orderService.checkOrderStatus(id), HttpStatus.OK);
    }

}
