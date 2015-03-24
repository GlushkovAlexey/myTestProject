package com.mySampleApplication.DAO;

import javax.persistence.*;

/**
 * Created by Viliric on 24.03.2015.
 */
@Entity
@Table(name = "hellotable", schema = "", catalog = "helloworld")
public class HellotableEntity {
    private String value;
    private short id;

    @Basic
    @Column(name = "value", nullable = true, insertable = true, updatable = true, length = 20)
    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Id
    @Column(name = "id", nullable = false, insertable = true, updatable = true)
    public short getId() {
        return id;
    }

    public void setId(short id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        HellotableEntity that = (HellotableEntity) o;

        if (id != that.id) return false;
        if (value != null ? !value.equals(that.value) : that.value != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = value != null ? value.hashCode() : 0;
        result = 31 * result + (int) id;
        return result;
    }
}
