package com.lannister.relieve_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "food")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long foodId;

    @Column(name = "item", nullable = false)
    private String item;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "donor_name", nullable = false)
    private String donorName;

    @Column(name = "donor_contact", nullable = false)
    private String donorContact;

    @Column(name = "type", nullable = false)
    private String type; // e.g. perishable, non-perishable

    @Column(name = "date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date date;
}
