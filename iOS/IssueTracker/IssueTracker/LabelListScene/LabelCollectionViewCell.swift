//
//  LabelCollectionViewCell.swift
//  IssueTracker
//
//  Created by TTOzzi on 2020/11/10.
//

import UIKit

final class LabelCollectionViewCell: UICollectionViewListCell {
    
    static var identifier: String {
        return String(describing: Self.self)
    }
    @IBOutlet private weak var labelLabel: PaddingLabel!
    @IBOutlet private weak var descriptionLabel: UILabel!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    override func updateConfiguration(using state: UICellConfigurationState) {
        super.updateConfiguration(using: state)
        guard state.isSelected || state.isHighlighted else { return }
        backgroundConfiguration?.backgroundColor = .clear
    }
}

extension LabelCollectionViewCell {
    func update(with label: Label) {
        labelLabel.text = label.title
        descriptionLabel.text = label.description
        guard let labelBackgroundColor = UIColor(from: label.color) else { return }
        labelLabel.backgroundColor = labelBackgroundColor
        labelLabel.textColor = labelBackgroundColor.isDarkness ? .systemBackground : .label
    }
}

private extension LabelCollectionViewCell {
    func configure() {
        accessories = [.disclosureIndicator()]
    }
}
