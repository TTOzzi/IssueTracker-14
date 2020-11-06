//
//  IssueResponse+Encodable.swift
//  IssueTrackerUnitTests
//
//  Created by 최동규 on 2020/11/05.
//

import Foundation
@testable import IssueTracker

extension IssueResponse: Encodable {
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(issues, forKey: .issues)
    }

    enum CodingKeys: String, CodingKey {
        case issues
    }
}
