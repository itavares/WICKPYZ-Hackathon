//
//  ViewController.swift
//  HealthRxApp
//
//  Created by Zayid Oyelami on 7/20/19.
//  Copyright © 2019 Zayid Oyelami. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var textField: UITextField!
    @IBOutlet weak var loginBtn: UIButton!
    
    @IBAction func login(_ sender: Any) {
        if textField.text == "Doctor" {
            let viewController:UIViewController = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "doctorView") as UIViewController
            self.present(viewController, animated: false, completion: nil)
        }
        else {
            let viewController:UIViewController = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "patientView") as UIViewController
            self.present(viewController, animated: false, completion: nil)
        }
        
        
        
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

