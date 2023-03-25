package com.hospital.sterileService.Controller;

import java.util.List;

import com.hospital.sterileService.Model.Order;
import com.hospital.sterileService.Model.Staff;
import com.hospital.sterileService.Service.OrderServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/order")
public class OrderController {
    private OrderServiceInterface orderService;

    public OrderController(OrderServiceInterface orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<List<Order>> getOrdersByCustomerId(@PathVariable("id") Integer customerId) {
        return new ResponseEntity<List<Order>>(orderService.getOrdersByCustomerId(customerId), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrders() {
        return new ResponseEntity<List<Order>>(orderService.getAllOrders(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Order> getOrder(@PathVariable("id") Integer id) {
        return new ResponseEntity<Order>(orderService.getOrder(id), HttpStatus.OK);
    }

    @GetMapping("/staff/{id}")
    public ResponseEntity<List<Order>> getAllByStaff(@PathVariable("id") Integer id){
        return new ResponseEntity<List<Order>>(orderService.getAllByStaff(id), HttpStatus.OK);
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

    @PutMapping("/assign_staff/{id}")
    public ResponseEntity<String> assignStaff(@PathVariable("id") Integer id, @RequestBody Staff staff) {
        return new ResponseEntity<String>(orderService.assignStaff(id, staff), HttpStatus.ACCEPTED);
    }

}
