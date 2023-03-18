package com.hospital.sterileService.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "tray_configuration_table")
public class TrayConfiguration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String trayName;

    public TrayConfiguration() {
    }

    public TrayConfiguration(Integer id, String trayName) {
        this.id = id;
        this.trayName = trayName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTrayName() {
        return trayName;
    }

    public void setTrayName(String trayName) {
        this.trayName = trayName;
    }


}

