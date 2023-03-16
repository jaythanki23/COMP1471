package com.hospital.sterileService.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tbl_tray_type")
@Getter
@Setter
@ToString
public class TrayTypeDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tray_type_Id;

    private String tray_type_desc;
}
