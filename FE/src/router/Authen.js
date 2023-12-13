import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import * as pages from '../page'
export default function Authen() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<pages.StudentPage/>}>
                        {/* <Route path="/1" element={<pages.PageOne />} />
                        <Route path="/2" element={<pages.PageTwo />} />
                        <Route path="/3" element={<pages.PageThree />} />
                        <Route path="/4" element={<pages.PageFour />} />
                        <Route path="/5" element={<pages.PageFive />} />
                        <Route path="/6" element={<pages.PageSix />} /> */}

                    </Route>
                </Routes>

            </Router>
        </div>
    );
}
