//
//  assessmentViewController.swift
//  HealthRxApp
//
//  Created by William Parkinson on 7/20/19.
//  Copyright © 2019 Zayid Oyelami. All rights reserved.
//

import UIKit
import Firebase
import Firebase
import SwiftyJSON
class assessmentViewController: UIViewController {
    var db: Firestore!
    var questionnaires: [String:Any] = [:]
    
    
    
    var questions:[String] = []
    var currInd = 0
    let orgPosX = 0
    let orgPosY = 0
    var dayScore: [Int] = []

    @IBOutlet weak var question: UILabel!
    
    @IBOutlet weak var AnswerImg: UIImageView!

    @IBOutlet weak var card: UIView!
    @IBOutlet weak var cardBoard: UIImageView!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let settings = FirestoreSettings()
        Firestore.firestore().settings = settings
        db = Firestore.firestore()
//        question.text = questions[currInd]
        db.collection("questionnaires").getDocuments() { (querySnapshot, err) in
            if let err = err {
                print("Error getting documents: \(err)")
            } else {
                for document in querySnapshot!.documents {

                    self.questionnaires[document.documentID] = document.data()
                }
//                let qst = self.questionnaires["PHQ9"]!.values as String
//                print(qst)

            }
        }

        // Do any additional setup after loading the view.
    }
    
    @IBAction func panCard(_ sender: UIPanGestureRecognizer){
        let card = sender.view!
        let point = sender.translation(in: view)
        let xFromCenter = card.center.x - view.center.x
        card.center = CGPoint(x: view.center.x + point.x, y: view.center.y + point.y)
       if xFromCenter > 0 {
            AnswerImg.image = UIImage(named:"Yes")
            AnswerImg.tintColor = UIColor.purple
        } else{
            AnswerImg.image = UIImage(named:"No")
            AnswerImg.tintColor = UIColor.blue
        }
            AnswerImg.alpha = abs(xFromCenter) / view.center.x
        
        if sender.state == UIGestureRecognizer.State.ended{
            if card.center.x < 60 {
                //Move off to the left side
                // No
                UIView.animate(withDuration: 0.3, animations:{ card.center = CGPoint(x: card.center.x - 200, y: card.center.y + 75)
                    card.alpha = 0
                    
                })
                dayScore.insert(0, at: self.currInd)
                if self.currInd < questions.count - 1
                {
                    self.currInd += 1
                    self.question.text = self.questions[self.currInd]
                    UIView.animate(withDuration: 0.85, animations:{ self.card.center = CGPoint(x: 207, y: 445.5)
                        card.alpha = 1
                        self.AnswerImg.alpha = 0
                        print(self.dayScore)
                    })
                }
                else{
                    print(dayScore)
                    print("Done")
                }
                
            } else if card.center.x > (view.frame.width - 60){
                //Move off to the right side
                // Yes
                UIView.animate(withDuration: 0.85, animations:{ card.center = CGPoint(x: card.center.x + 200, y: card.center.y + 75)
                    card.alpha = 0
                    
                })
                dayScore.insert(1, at: self.currInd)
                if self.currInd < questions.count - 1
                    {
                    self.currInd += 1
                    self.question.text = self.questions[self.currInd]
                    UIView.animate(withDuration: 0.85, animations:{ self.card.center = CGPoint(x: 207, y: 445.5)
                        card.alpha = 1
                        self.AnswerImg.alpha = 0
                        print(self.dayScore)
                    })
                }
                else{
                    print(dayScore)
                    print("Done")
                }
            }
            
        }
    }
    @IBAction func restart(_ sender: UIButton) {
        restartCard()
    }
    
    func restartCard(){
        UIView.animate(withDuration: 0.2, animations: {self.card.center = self.view.center
            self.AnswerImg.alpha = 0
            
        })
        
    }
    
}
