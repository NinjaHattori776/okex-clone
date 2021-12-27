import React from 'react';
import './collapseBanner.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CollapseBanner = () => {


    return (
        <>
            <h1>Your one-stop cryptocurrency platform</h1>
            <div className="grid-container_collapse">
                <div className="grid-child1">
    
                    <div className="accordion">
                        <input id="toggle1" type="radio" className="accordion-toggle" name="toggle" />
                        <label for="toggle1">Buy Crypto</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>
                    <div className="accordion">
                        <input id="toggle2" type="radio" className="accordion-toggle" name="toggle" />
                        <label for="toggle2">Trade</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>

                    <div className="accordion">
                        <input id="toggle3" type="radio" className="accordion-toggle" name="toggle" />
                        <label for="toggle3">Finance</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>

                    <div className="accordion">
                        <input id="toggle4" type="radio" className="accordion-toggle" name="toggle" />
                        <label for="toggle4">Tools</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>

                    <div className="accordion">
                        <input id="toggle5" type="radio" className="accordion-toggle" name="toggle" />
                        <label for="toggle5">Acadmey</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>
                </div>

                <div className="grid-child2">
                <div className="video_div">
                <video width="100%" height="100%" controls >
                        <source src="https://academyokex.wpcomstaging.com/wp-content/uploads/2020/05/OKEX_FINAL_VERSION%EF%BC%88480P14.mp4" type="video/mp4" />
                    </video>
                </div>
               
                </div>

            </div>
        </>

    )
}

export default CollapseBanner;
