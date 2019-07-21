//
//  AuthViewController.swift
//  HealthRxApp
//
//  Created by William Parkinson on 7/20/19.
//  Copyright © 2019 Zayid Oyelami. All rights reserved.
//

import UIKit
import Firebase
import Foundation


class AuthViewController: UIViewController {
    
    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    var loginMode = true
    
    @IBAction func login(_ sender: Any){
        if let email = emailTextField.text{
            if let password = passwordTextField.text{
                if loginMode{
                    
                } else{
                    Auth.auth().createUser(withEmail: email, password: password) {(result,error)
                        in
                        if error != nil{
                            print("User Created!")
                        }
                    }
                }
            }
        }
    }
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
    }
}














    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */
