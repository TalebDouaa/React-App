import React, { Component, Container, Row,Col } from 'react'
class Data extends Component {
import 
    render() {
        return (
            <div>
                 <div>
  <section id="herooo" className="d-flex align-items-center">
  </section>
  <section id="pricing" className="pricing">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Statistic</h2>
        <p>Our project is based on two deffirent Data base , wich allow us to </p>
      </div>
      <div className="row">
        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
          <div className="box">
            <h3>Covid-19 Data-Base</h3>
            <br />
            <h4>5163<span>Tweets</span></h4>
            <ul>
              <li><i className="bx bx-check" />Balanced Data-Base</li>
              <li><i className="bx bx-check" /> Manually Collect </li>
              <li><i className="bx bx-check" />Algerian dialect only</li>
              <li><i className="bx bx-check" /> Train Data with 4129 Tweets</li>
              <li><i className="bx bx-check" /> Test Data with 1033 Tweets</li>
            </ul>
            <a href="#Covid-data" className="buy-btn">Statistic</a>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={200}>
          <div className="box ">
            <h3>Arsarcasm Data-Base V2</h3>
            <br />
            <h4>15,548<span>Tweets</span></h4>
            <ul>
              <li><i className="bx bx-check" /> Unbalanced Data</li>
              <li><i className="bx bx-check" /> Collected by AbuFarha</li>
              <li><i className="bx bx-check" /> Five main regions Arabic Dialect</li>
              <li><i className="bx bx-check" /> Train Data with Tweets</li>
              <li><i className="bx bx-check" /> Test Data with Tweets </li>
            </ul>
            <a href="#Arsarcasm-data" className="buy-btn">Statistic</a>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
          <div className="box ">
            <h3>Arsarcasm Data-Base with augmentation </h3>
            <h4>20,120<span>Tweets</span></h4>
            <ul>
              <li><i className="bx bx-check" /> Balanced Data </li>
              <li><i className="bx bx-check" /> Oversampling using Smote</li>
              <li><i className="bx bx-check" /> Undersampling using TomrkLinks</li>
              <li><i className="bx bx-check" /> Train Data with Tweets</li>
              <li><i className="bx bx-check" /> Test Data with Tweets</li>
            </ul>
            <a href="#augmentation-data" className="buy-btn">Statistic</a>
          </div>
        </div>
      </div>
    </div></section>
  <section id="Covid-data" className="why-us section-bg">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
          <div className="content">
            <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
          </div>
          <div className="accordion-list">
            <ul>
              <li>
                <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> MarBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                  <p>
                    MARBERT is a large-scale pre-trained masked language model focused on both Dialectal Arabic (DA) and MSA.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> AraBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    AraBERT is an Arabic pretrained lanaguage model based on Google's BERT architechture. AraBERT uses the same BERT-Base config. 
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> CamelBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"><span>04</span> Bidirectional Lstm  Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    Bidirectional long-short term memory(Bidirectional LSTM) is the process of making any neural network o have the sequence information in both directions backwards (future to past) or forward(past to future)                  </p></div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed"><span>05</span>Gated recurrent units (GRUs) Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-6" className="collapsed"><span>06</span> Combination between CNN and Bidirectional Lstm (CNN-BiLSTM) <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-6" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/why-us.png")'}} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
      </div>
    </div>
  </section>
  <section id="Arsarcasm-data" className="why-us section-bg">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
          <div className="content">
            <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
          </div>
          <div className="accordion-list">
            <ul>
              <li>
                <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> MarBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                  <p>
                    MARBERT is a large-scale pre-trained masked language model focused on both Dialectal Arabic (DA) and MSA.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> AraBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    AraBERT is an Arabic pretrained lanaguage model based on Google's BERT architechture. AraBERT uses the same BERT-Base config. 
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> CamelBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"><span>04</span> Bidirectional Lstm  Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    Bidirectional long-short term memory(Bidirectional LSTM) is the process of making any neural network o have the sequence information in both directions backwards (future to past) or forward(past to future)                  </p></div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed"><span>05</span>Gated recurrent units (GRUs) Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-6" className="collapsed"><span>06</span> Combination between CNN and Bidirectional Lstm (CNN-BiLSTM) <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-6" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/why-us.png")'}} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
      </div>
    </div>
  </section>
  <section id="augmentation-data" className="why-us section-bg">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
          <div className="content">
            <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
          </div>
          <div className="accordion-list">
            <ul>
              <li>
                <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> MarBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                  <p>
                    MARBERT is a large-scale pre-trained masked language model focused on both Dialectal Arabic (DA) and MSA.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> AraBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    AraBERT is an Arabic pretrained lanaguage model based on Google's BERT architechture. AraBERT uses the same BERT-Base config. 
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> CamelBert Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"><span>04</span> Bidirectional Lstm  Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    Bidirectional long-short term memory(Bidirectional LSTM) is the process of making any neural network o have the sequence information in both directions backwards (future to past) or forward(past to future)                  </p></div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed"><span>05</span>Gated recurrent units (GRUs) Model <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-6" className="collapsed"><span>06</span> Combination between CNN and Bidirectional Lstm (CNN-BiLSTM) <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-6" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    CAMeLBERT-Mix NER Model is a Named Entity Recognition (NER) model that was built by fine-tuning the CAMeLBERT Mix model.                    </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/why-us.png")'}} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
      </div>
    </div>
  </section>
</div>

            </div>
        )}}

        export default Data