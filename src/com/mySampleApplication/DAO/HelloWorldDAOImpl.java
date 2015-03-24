package com.mySampleApplication.DAO;

import com.mySampleApplication.utils.HibernateUtil;
import com.mySampleApplication.DAO.HelloWorldDAO;
import com.mySampleApplication.DAO.HellotableEntity;
import org.hibernate.Session;

/**
 * Created by Viliric on 21.03.2015.
 */
public class HelloWorldDAOImpl implements HelloWorldDAO {
    @Override
    public HellotableEntity gettableValue(int id) {
        Session session = null;
        HellotableEntity HelloEntity = null;
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            HelloEntity = (HellotableEntity) session.load(HellotableEntity.class, (short) id);
        } catch (Exception e) {

        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return HelloEntity;
    }
}
