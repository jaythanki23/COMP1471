package com.hospital.sterileService.controller;

import com.hospital.sterileService.entity.OrderDTO;
import com.hospital.sterileService.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/")
    public ResponseEntity<List<OrderDTO>> getAllOrders(){
        try{
            List<OrderDTO> orderDTOList = orderService.getAllOrders();
            if (orderDTOList.isEmpty() || orderDTOList.size() == 0)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return new ResponseEntity<>(orderDTOList,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{order_id}")
    public ResponseEntity<OrderDTO> getOrder(@PathVariable Long order_id){
        try{
            Optional<OrderDTO> orderDTO = orderService.getOrder(order_id);
            if (orderDTO.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return new ResponseEntity<>(orderDTO.get(),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/")
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO){
        try {
            return new ResponseEntity<>(orderService.createOrder(orderDTO),HttpStatus.OK);

        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/")
    public ResponseEntity<OrderDTO> updateOrder(@RequestBody OrderDTO orderDTO){
        try {
            return new ResponseEntity<>(orderService.createOrder(orderDTO),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{order_id}")
    public ResponseEntity<OrderDTO> deleteOrder(@PathVariable Long order_id){
        try{
            orderService.deleteOrder(order_id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
