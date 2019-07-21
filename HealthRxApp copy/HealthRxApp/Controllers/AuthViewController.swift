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
    
    @IBAction func loginToHome(_ sender: Any) {
        if let email = emailTextField.text, let password = passwordTextField.text{
        Auth.auth().signIn(withEmail: email, password: password) { (result, error) in
            if error == nil {
                self.performSegue(withIdentifier: "fromSigninToHome", sender: nil)
                
            } else {
                print(error)
            }
            }}
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
