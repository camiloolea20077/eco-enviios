package com.prueba.inicio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String tipo;

    // Getters 
    public Long getId(){
        return id;
    }
    public String getNombre(){
        return nombre;
    }
    public String getTipo(){
        return tipo;
    }

    //Setters

    public void setId( Long id){
        this.id=id;
    }
    public void setNombre(String nombre){
        this.nombre=nombre;
    }
    public void setTipo(String tipo){
        this.tipo=tipo;
    }
}
