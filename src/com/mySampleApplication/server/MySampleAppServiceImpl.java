package com.mySampleApplication.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.mySampleApplication.DAO.HelloWorldDAO;
import com.mySampleApplication.DAO.HelloWorldDAOImpl;
import com.mySampleApplication.DAO.HellotableEntity;
import com.mySampleApplication.client.MySampleApplicationService;

public class MySampleAppServiceImpl extends RemoteServiceServlet implements MySampleApplicationService {
    // Implementation of sample interface method
    public String getMessage(String msg) {
        HelloWorldDAO hello = new HelloWorldDAOImpl();
        HellotableEntity helloent = hello.gettableValue(1);
        return helloent.getValue();
    }
}
