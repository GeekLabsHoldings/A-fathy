import React from "react";
import '../WriteArticles/WriteArt.css'
import img14 from "../../imgs/logo.png"
import img13 from "../../imgs/logos-07.png";
import Footer from "../../Component/Footer";
const WriteArt = () =>{
    return(
        <div className="Write-Art">
            <div className="requirments">
                <h5>Requirments</h5>
                <div className="prg1">
                    <span>Topics</span>
                    <p>In order to make the chances of your submission getting accepted and published on Penny Stocks Today,
                         please familiarise yourself with the content we produce.</p>
                    <p>All submissions must be unique (i.e. not found elsewhere on the internet).</p>
                </div> 

                <div className="prg2">
                    <span>Article Length</span>
                    <p>We welcome long and in-depth articles.</p>
                    <p>All news stories should be at least 400 words in length, and others must have a minimum of 600 words.</p>
                </div>
                <div className="acceptable">
                    <p>Acceptable Submissions</p>
                    <button><a href="#">News/product releases</a></button>
                    <button><a href="#">Articles</a></button>
                    <button><a href="#">Feature articles</a></button>
                    <button><a href="#">Opinion pieces</a></button>
                    <button><a href="#">Multimedia</a></button>
                </div>
            </div>
            <div className="write-art">
                <h5>Write Your Article:</h5>
                <div className="add-art">
                    <div className="plus">+</div>
                    <p>Article Hero Image</p>
                </div>
                <div className="art-inputs">
                    <label for='Articale-title' className="label1">Article Title</label>
                    <input className="input1" type="text" />
                    <div className="d-flex">
                    <label for='Articale-title' className="label2">Article Body</label>
                    <span>You Can Drag And Drop Images Between Lines.</span>
                    </div>
                    <input className="input2" type="text" />
                </div>
                <div className="buttons">
                    <button className="preview"><a>Preview</a></button>
                    <button className="submit"><a>Submit</a></button>
                </div>
            </div>
            <div className="art-footer">
                <Footer />
            </div>
        </div>
        
    )
}
export default WriteArt;