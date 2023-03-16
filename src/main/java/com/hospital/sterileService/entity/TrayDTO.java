package com.hospital.sterileService.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Entity
@Table(name = "tbl_tray")
@Getter
@Setter
@ToString
public class TrayDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tray_Id;

    @ManyToOne(fetch = FetchType.LAZY)
    private TrayTypeDTO tray_type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="order_Id")
    private OrderDTO order;

    @CreationTimestamp
    @Column(name = "created_at",nullable = false,updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updatedAt;
}
