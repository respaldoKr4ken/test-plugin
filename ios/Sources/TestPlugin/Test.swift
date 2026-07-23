import Foundation

@objc public class Test: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
