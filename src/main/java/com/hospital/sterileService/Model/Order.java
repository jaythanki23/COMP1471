package com.hospital.sterileService.Model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "order_table")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer customerId;

    @Column(columnDefinition = "boolean default false")
    private Boolean accepted = false;

    @ManyToOne
    @JoinColumn(name = "staff_id",referencedColumnName = "id")
    private Staff staff;

    @CreationTimestamp
    private Date creationDate;

    public Order() {
    }

    public Order(Integer id, Integer customerId, Boolean accepted, Staff staff, Date creationDate) {
        this.id = id;
        this.customerId = customerId;
        this.accepted = accepted;
        this.staff = staff;
        this.creationDate = creationDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

    public Staff getStaff() {
        return staff;
    }

    public void setStaff(Staff staff) {
        this.staff = staff;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
