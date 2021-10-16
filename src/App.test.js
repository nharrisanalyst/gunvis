import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// @ponicode
describe("_onViewPortChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[56784, "bc23a9d531064583ace8f67dad60f6bb", 56784], [987650, 12, 12], ["bc23a9d531064583ace8f67dad60f6bb", 12345, 56784]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst._onViewPortChange(["61.0865", "-144.7750"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._onViewPortChange(["-19.3366", "-46.1477"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._onViewPortChange(["-84.8577", "134.8560"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._onViewPortChange(["41.1994", "-115.9206"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._onViewPortChange(["39.2233", "-78.8613"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._onViewPortChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[56784, "bc23a9d531064583ace8f67dad60f6bb", 987650], ["a1969970175", "a1969970175", "bc23a9d531064583ace8f67dad60f6bb"], [56784, 12345, 987650]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["a1969970175", 12, 56784], [12, 12, 12], ["a1969970175", "bc23a9d531064583ace8f67dad60f6bb", 12]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_onWindowChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[12, 987650, 56784], [987650, 56784, "bc23a9d531064583ace8f67dad60f6bb"], [12, "bc23a9d531064583ace8f67dad60f6bb", 987650]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst._onWindowChange(287)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._onWindowChange(48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._onWindowChange(30)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._onWindowChange(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._onWindowChange(255)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._onWindowChange(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_handleShowChart", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["bc23a9d531064583ace8f67dad60f6bb", 12345, "bc23a9d531064583ace8f67dad60f6bb"], ["bc23a9d531064583ace8f67dad60f6bb", 56784, 12345], [12345, "a1969970175", "bc23a9d531064583ace8f67dad60f6bb"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst._handleShowChart(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._handleShowChart(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._handleShowChart(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._handleShowChart(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._handleShowChart(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._handleShowChart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_resize", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["bc23a9d531064583ace8f67dad60f6bb", 56784, 987650], ["bc23a9d531064583ace8f67dad60f6bb", 56784, "a1969970175"], ["a1969970175", "bc23a9d531064583ace8f67dad60f6bb", 12345]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst._resize()
        }
    
        expect(callFunction).not.toThrow()
    })
})
