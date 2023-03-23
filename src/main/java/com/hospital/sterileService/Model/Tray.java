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

    @ManyToOne
    @JoinColumn(
            name="tray_configuration_id",
            referencedColumnName = "id"
    )
    private TrayConfiguration trayConfiguration;


    @ManyToOne
    @JoinColumn(
            name="operation_id",
            referencedColumnName = "id"
    )
    private Operation operation;

    public Tray() {
    }

    public Tray(Integer id, Order order, TrayConfiguration trayConfiguration, Operation operation) {
        this.id = id;
        this.order = order;
        this.trayConfiguration = trayConfiguration;
        this.operation = operation;
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

    public TrayConfiguration getTrayConfiguration() {
        return trayConfiguration;
    }

    public void setTrayConfiguration(TrayConfiguration trayConfiguration) {
        this.trayConfiguration = trayConfiguration;
    }

    public Operation getOperation() {
        return operation;
    }

    public void setOperation(Operation operation) {
        this.operation = operation;
    }
}
