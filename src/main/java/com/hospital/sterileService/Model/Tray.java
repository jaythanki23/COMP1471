package com.hospital.sterileService.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "tray_table")
public class Tray {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(
            name="order_id",
            referencedColumnName = "id"
    )
    private Order order;

    public Tray() {
    }

    public Tray(Integer id, Order order) {
        this.id = id;
        this.order = order;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
