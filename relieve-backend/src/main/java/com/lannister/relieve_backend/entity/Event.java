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
@Table(name = "events")
public class Event {
  /*
  * EventName
  * Description
  * Contact[]
  * DateFrom
  * DateTo
  * Location
  * volunteers[userId1, userId2]
  * eventAdmin[userId1, userId2](?)
  * VolunteerCalls[]
  * fundCalls[ ]
  * Reports[day by day]
  * */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;

    @Column(name= "org_id")
    private Long communityId;
    @Column(name = "event_name")
    private String eventName;
    @Column(name = "description")
    private String description;
    @Column(name = "contacts")
    private String[] contacts;
    @Column(name = "date_from")
    private Date dateFrom;
    @Column(name = "date_to")
    private Date dateTo;
    @Column(name = "location")
    private String location;
    @Column(name = "volunteers")
    private Long[] volunteers;
    @Column(name = "event_admins")
    private Long[] eventAdmins;
    @Column(name = "volunteer_calls")
    private Long[] volunteerCalls;
    @Column(name = "donation_calls")
    private Long[] donationCalls;
    @Column(name = "reports")
    private Long[] reports;
}

