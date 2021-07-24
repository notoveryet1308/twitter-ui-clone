import { Label, Label_M } from "../Label"
import { Paragraph } from "../Paragraph"
import { Title_M } from "../Title"


import "./_style.scss";

export const TweetCard = {
  
  render: ()=>{
     return `
     <div class="TweetCard">
        <div class="Tweet__type">
          <div class="Tweet__type--icon"></div>
          <div class="Tweet__type--text"></div>
        </div>
        <div class="Tweet__displayPic">
          <div class="Tweet__displayPic--holder">

          </div>
        </div>
        <div class="Tweet__content">
          <div class="Tweet__userDetail">
            <div class="Tweet__userDisplayName">${Title_M.render({title: "Rahul Raj"})}</div>
            <div class="Tweet__userUserName">${Label.render({label: "@rahulraz1308"})}</div>
            <div class="Tweet__date">. ${Label.render({label: " &nbsp;Jan 12"})}</div>
          </div>
          <div class="Tweet__textBox">
            ${Paragraph.render({paragraph: "Twitter developer API Test -- 2!! 🙄😂🤣😎"})}
          </div>
          <div class="Tweet__hashtag">
             <a href="/#/hashtag/testing" class="Tweet__hashtag">#teting</a>
             <a href="/#/hashtag/twitterapi" class="Tweet__hashtag">#twitterapi</a>
             <a href="/#/hashtag/developer" class="Tweet__hashtag">#developer</a>
             <a href="/#/hashtag/ooloilabs" class="Tweet__hashtag">#ooloilabs</a>
          </div>
          <div class="Tweet__media"></div>
          <div class="Tweet__actions">
            <div class="Tweet__comments Tweet__actions--content ">
              <i class="ph-chat-circle icon"></i>
              <span class="Tweet__comment--count Tweet__actions--count">
                ${Label.render({label:100})}
              </span>
            </div>
            <div class="Tweet__repeat Tweet__actions--content ">
              <i class="ph-repeat icon"></i>
              <span class="Tweet__repeat--count Tweet__actions--count">
               ${Label.render({label:100})}
              </span>
            </div>
            <div class="Tweet__like Tweet__actions--content ">
              <i class="ph-heart icon"></i>
              <span class="Tweet__like--count Tweet__actions--count">
               ${Label.render({label:"10k"})}
              </span>
            </div>
            
            <div class="Tweet__download Tweet__actions--content ">
              <i class="ph-download-simple icon"></i>
            </div>
            <div class="Tweet__analytics Tweet__actions--content ">
              <i class="ph-trend-up icon"></i>
              <span class="Tweet__Tweet__analytics--count Tweet__actions--count">
               ${Label.render({label:100})}
              </span>
            </div>
            
          </div>
        </div>    
     </div>
     `
  }
}