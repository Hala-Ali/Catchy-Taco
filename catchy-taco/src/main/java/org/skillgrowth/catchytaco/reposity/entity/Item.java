package org.skillgrowth.catchytaco.reposity.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.skillgrowth.catchytaco.controller.dto.ItemDto;

import java.util.Objects;

@Entity
public class Item
{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String name;

    private String description;

    private String imageUrl;

    public Item() {

    }

    public Item(ItemDto itemDTO) {
        name = itemDTO.getName();
        description = itemDTO.getDescription();
        imageUrl = itemDTO.getImageUrl();
    }
//
//    public Item(Integer id, String name, String description, String imageUrl) {
//
//    }

    public Integer getId()
    {
        return id;
    }

    public void setId( Integer id )
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName( String name )
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription( String description )
    {
        this.description = description;
    }

    public String getImageUrl()
    {
        return imageUrl;
    }

    public void setImageUrl( String imageUrl )
    {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Item item)) return false;
        return Objects.equals(getId(), item.getId()) && Objects.equals(getName(), item.getName()) && Objects.equals(getDescription(), item.getDescription()) && Objects.equals(getImageUrl(), item.getImageUrl());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getDescription(), getImageUrl());
    }
}