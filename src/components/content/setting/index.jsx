/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, memo } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { getCurrentDate } from '../../../helper/custom'
import { useDispatch } from 'react-redux';
import { setTitlePage } from '../../../redux/actions/Auth';

function Setting() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={SettingList} />
        </Switch>
    )
}

function SettingList() {
    const dispatch = useDispatch()
    const $ = window.$

    useEffect(() => {
        dispatch(setTitlePage('Pengaturan'));
    }, [])
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <small className="text-muted font-14">
                                    <b>Pengaturan</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Pengaturan Perusahaan
                                </h3>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end page-title-box*/}
                </div>
                {/*end col*/}
            </div>

            <div className="row">
                <div className="col-12">
                    {/* Left sidebar */}
                    <div className="email-leftbar">
                        <div className="card">
                            <div className="card-body">
                                disini sidenav
                            </div>{/* end card-body */}
                        </div>{/* end card */}
                    </div>
                    {/* End Left sidebar */}
                    {/* Right Sidebar */}
                    <div className="email-rightbar">
                        <div className="card">
                            <ul className="message-list">
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk19" />
                                            <label htmlFor="chk19" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Peter, me (3)</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">Hello &nbsp;–&nbsp; <span className="teaser">Trip home from 🎉 Colombo has been arranged, then Jenna will come get me from Stockholm. :)</span>
                                        </a>
                                        <div className="date">Mar. 6</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk20" />
                                            <label htmlFor="chk20" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">me, Susanna (7)</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject"><span className="badge-soft-warning badge mr-2">Freelance</span>Since you asked... and i'm
                                            inconceivably bored at the train station &nbsp;–&nbsp;
                                            <span className="teaser">Alright thanks. I'll have to re-book that somehow, i'll get                            back to you.</span>
                                        </a>
                                        <div className="date">Mar. 6</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk6" />
                                            <label htmlFor="chk6" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Web Support Dennis</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">Re: New mail settings &nbsp;–&nbsp;
                                            <span className="teaser">Will you answer him asap?</span>
                                        </a>
                                        <div className="date">Mar 7</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk7" />
                                            <label htmlFor="chk7" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">me, Peter (2)</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject"><span className="badge-soft-info badge mr-2">Support</span>Off on Thursday &nbsp;–&nbsp;
                                            <span className="teaser">Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 &gt; 4 mar 2014 at 5:55 pm</span>
                                        </a>
                                        <div className="date">Mar 4</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk8" />
                                            <label htmlFor="chk8" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Medium</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject"><span className="badge-soft-purple badge mr-2">Social</span>This Week's Top Stories &nbsp;–&nbsp;
                                            <span className="teaser">Our top pick for you on Medium this week The Man Who Destroyed America’s Ego</span>
                                        </a>
                                        <div className="date">Feb 28</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk9" />
                                            <label htmlFor="chk9" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Death to Stock</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">🎁 Montly High-Res Photos &nbsp;–&nbsp;
                                            <span className="teaser">To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.</span>
                                        </a>
                                        <div className="date">Feb 28</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" defaultChecked id="chk3" />
                                            <label htmlFor="chk3" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Randy, me (5)</p><span className="star-toggle fas fa-star text-warning" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject"><span className="badge-soft-success badge mr-2">Family</span>Last pic over my village &nbsp;–&nbsp;
                                            <span className="teaser">Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!</span>
                                        </a>
                                        <div className="date">5:01 am</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk4" />
                                            <label htmlFor="chk4" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Andrew Zimmer</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">Mochila Beta: Subscription Confirmed
                                            &nbsp;–&nbsp; <span className="teaser">You've been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...</span>
                                        </a>
                                        <div className="date">Mar 8</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk5" />
                                            <label htmlFor="chk5" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Infinity HR</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">Sveriges Hetaste sommarjobb &nbsp;–&nbsp; 👌
                                            <span className="teaser">Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.</span>
                                        </a>
                                        <div className="date">Mar 8</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk10" />
                                            <label htmlFor="chk10" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Revibe</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject"><span className="badge-soft-pink badge mr-2">Friends</span>Weekend on Revibe &nbsp;–&nbsp;
                                            <span className="teaser">Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!</span>
                                        </a>
                                        <div className="date">Feb 27</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk11" />
                                            <label htmlFor="chk11" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Erik, me (5)</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">Regarding our meeting &nbsp;–&nbsp;
                                            <span className="teaser">That's great, see you on Thursday!</span>
                                        </a>
                                        <div className="date">Feb 24</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk12" />
                                            <label htmlFor="chk12" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">KanbanFlow</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject"><span className="badge-soft-purple badge mr-2">Social</span>Task assigned: Clone ARP's website
                                            &nbsp;–&nbsp; <span className="teaser">You have been assigned 💥 a task by Alex@Work on the board Web.</span>
                                        </a>
                                        <div className="date">Feb 24</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk13" />
                                            <label htmlFor="chk13" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Tobias Berggren</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">Let's go fishing! &nbsp;–&nbsp;
                                            <span className="teaser">Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.</span>
                                        </a>
                                        <div className="date">Feb 23</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk14" />
                                            <label htmlFor="chk14" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Charukaw, me (7)</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">Hey man &nbsp;–&nbsp; <span className="teaser">Nah man sorry i don't. Should i get it?</span>
                                        </a>
                                        <div className="date">Feb 23</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" defaultChecked id="chk15" />
                                            <label htmlFor="chk15" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">me, Peter (5)</p><span className="star-toggle fas fa-star text-warning" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject"><span className="badge-soft-info badge mr-2">Support</span>Home again! &nbsp;–&nbsp; <span className="teaser">That's just perfect! See you tomorrow.</span>
                                        </a>
                                        <div className="date">Feb 21</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk16" />
                                            <label htmlFor="chk16" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Stack Exchange</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">1 new items in your Stackexchange inbox
                                            &nbsp;–&nbsp; <span className="teaser">The following items were added to your Stack Exchange global inbox since you last checked it.</span>
                                        </a>
                                        <div className="date">Feb 21</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk17" />
                                            <label htmlFor="chk17" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">Google Drive Team</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">You can now use your storage in Google
                                            Drive &nbsp;–&nbsp; <span className="teaser">Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.</span>
                                        </a>
                                        <div className="date">Feb 20</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-mail col-mail-1">
                                        <div className="checkbox-wrapper-mail">
                                            <input type="checkbox" id="chk18" />
                                            <label htmlFor="chk18" className="toggle" />
                                        </div>
                                        <a href="#">
                                            <p className="title">me, Susanna (11)</p><span className="star-toggle far fa-star" />
                                        </a>
                                    </div>
                                    <div className="col-mail col-mail-2">
                                        <a href="#" className="subject">Train/Bus &nbsp;–&nbsp; <span className="teaser">Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.🏏</span>
                                        </a>
                                        <div className="date">Feb 19</div>
                                    </div>
                                </li>
                            </ul>
                        </div> {/* panel */}
                    </div> {/* end email-rightbar */}
                </div>{/* end Col */}
            </div>
        </Fragment>
    )
}

export default Setting
