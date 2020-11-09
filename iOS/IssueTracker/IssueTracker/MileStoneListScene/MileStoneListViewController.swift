//
//  MileStoneListViewController.swift
//  IssueTracker
//
//  Created by 최동규 on 2020/11/04.
//

import UIKit

final class MileStoneListViewController: UIViewController {
    
    static var identifier: String {
        return String(describing: Self.self)
    }
    weak var coordinator: MileStoneCoordinator?
    
    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.rightBarButtonItem = UIBarButtonItem.init(systemItem: .add)
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationController?.navigationBar.topItem?.title = "마일스톤"
    }
}