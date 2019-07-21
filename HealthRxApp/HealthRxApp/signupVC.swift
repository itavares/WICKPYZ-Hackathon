//
//  signupVC.swift
//  HealthRxApp
//
//  Created by Zayid Oyelami on 7/20/19.
//  Copyright © 2019 Zayid Oyelami. All rights reserved.
//

import UIKit
import Firebase
class signupVC: UIViewController {

    @IBOutlet weak var userRegister: UITextField!
    @IBOutlet weak var passRegister: UITextField!
    @IBOutlet weak var verifyPass: UITextField!
    var loginMode = true
    @IBAction func signUp(_ sender: Any) {
                if let email = userRegister.text{
                    if let password = passRegister.text{
                            Auth.auth().createUser(withEmail: email, password: password) {(result,error)
                                in
                                if error == nil{
                                    print("User Created!")
                                    self.performSegue(withIdentifier: "toHomeScreen", sender: nil)
                                }
                                else{
                                    print(error!)
                                }
                            }
                        
                    }
                }
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
