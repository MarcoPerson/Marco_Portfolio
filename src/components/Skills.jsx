import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills(props) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='skills'>
            <h1 className="skills-title" data-aos="fade-down">Skills</h1>
            <div className="skills-wrapper">
                <div className="skills-domains" data-aos="fade-right">
                    <h2 className="skills-domains-header">PROGRAMMING</h2>
                    <div className="skills-list">
                        <div className="skills-a">
                            <h3>Advanced</h3>
                            <div className="skills-sublist">

                                <div className="skills-content">
                                    <img src="/assets/icons/java_logo.png" title='Java' alt="#" className="skills-image" />
                                    <p>Java</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/python_logo.png" title='Python' alt="#" className="skills-image" />
                                    <p>Python</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/numpy_logo.png" title='Numpy' alt="#" className="skills-image" />
                                    <p>Numpy</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/pandas_logo.png" title='Pandas' alt="#" className="skills-image" />
                                    <p>Pandas</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Medium</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/c_logo.png" title='C' alt="#" className="skills-image" />
                                    <p>C</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/scikit_logo.png" title='Scikit-Learn' alt="#" className="skills-image" />
                                    <p>Scikit-Learn</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/torch_logo.png" title='PyTorch' alt="#" className="skills-image" />
                                    <p>PyTorch</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/qt_logo.png" title='QT' alt="#" className="skills-image" />
                                    <p>QT</p>
                                </div>

                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Basics</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/csharp_logo.png" title='C#' alt="#" className="skills-image" />
                                    <p>C#</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/ocaml_logo.png" title='Ocaml' alt="#" className="skills-image" />
                                    <p>Ocaml</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/tensorflow_logo.png" title='TensorFlow' alt="#" className="skills-image" />
                                    <p>TensorFlow</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/keras_logo.png" title='Keras' alt="#" className="skills-image" />
                                    <p>Keras</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-domains" data-aos="fade-up">
                    <h2 className="skills-domains-header">WEB</h2>
                    <div className="skills-list">
                        <div className="skills-a">
                            <h3>Advanced</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/html_logo.png" title='HTML' alt="#" className="skills-image" />
                                    <p>HTML</p>
                                </div>

                                <div className="skills-content">
                                    <img src="/assets/icons/css_logo.png" title='CSS' alt="#" className="skills-image" />
                                    <p>CSS</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/javascript_logo.png" title='JavaScript' alt="#" className="skills-image" />
                                    <p>JavaScript</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/mysql_logo.png" title='MySQL' alt="#" className="skills-image" />
                                    <p>MySQL</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/tailwind-logo.png" title='TailWindCSS' alt="#" className="skills-image" />
                                    <p>TailWindCSS</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Medium</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/reactjs_logo.png" title='ReactJS' alt="#" className="skills-image" />
                                    <p>ReactJS</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/angular_logo.png" title='Angular' alt="#" className="skills-image" />
                                    <p>Angular</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/nextjs_logo.png" title='NextJS' alt="#" className="skills-image" />
                                    <p>NextJS</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/mongodb_logo.png" title='MongoDB' alt="#" className="skills-image" />
                                    <p>MongoDB</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/postgresql_logo.png" title='PostgreSQL' alt="#" className="skills-image" />
                                    <p>PostgreSQL</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Basics</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/nodejs_logo.png" title='NodeJS' alt="#" className="skills-image" />
                                    <p>NodeJS</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/bootstrap_logo.png" title='Bootstrap' alt="#" className="skills-image" />
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-domains" data-aos="fade-left">
                    <h2 className="skills-domains-header">SPEAKING</h2>
                    <div className="skills-list">
                        <div className="skills-a">
                            <h3>Advanced</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/france_logo.png" title='French' alt="#" className="skills-image" />
                                    <p>French</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/togo_logo.png" title='Ewé' alt="#" className="skills-image" />
                                    <p>Ewé</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Medium</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/britain_logo.png" title='English' alt="#" className="skills-image" />
                                    <p>English</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Basics</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/japan_logo.png" title='Japanese' alt="#" className="skills-image" />
                                    <p>Japanese</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-domains" data-aos="fade-left">
                    <h2 className="skills-domains-header">TECH</h2>
                    <div className="skills-list">
                        <div className="skills-a">
                            <h3>Medium</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/azure_logo.png" title='Azure' alt="#" className="skills-image" />
                                    <p>Azure</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/openstack_logo.png" title='OpenStack' alt="#" className="skills-image" />
                                    <p>OpenStack</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/hadoop_logo.png" title='Hadoop' alt="#" className="skills-image" />
                                    <p>Hadoop</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Basics</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/spark_logo.png" title='Spark' alt="#" className="skills-image" />
                                    <p>Spark</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/cassandra_logo.png" title='Cassandra' alt="#" className="skills-image" />
                                    <p>Cassandra</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/neo4j_logo.png" title='Neo4j' alt="#" className="skills-image" />
                                    <p>Neo4j</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-domains" data-aos="fade-down">
                    <h2 className="skills-domains-header">PROJECT MANAGEMENT</h2>
                    <div className="skills-list">
                        <div className="skills-a">
                            <h3>Medium</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/git_logo.png" title='Git' alt="#" className="skills-image" />
                                    <p>Git</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/github_logo.png" title='GitHub' alt="#" className="skills-image" />
                                    <p>GitHub</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/gitlab_logo.png" title='GitLab' alt="#" className="skills-image" />
                                    <p>GitLab</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Basics</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/bitbucket_logo.png" title='Bitbucket' alt="#" className="skills-image" />
                                    <p>Bitbucket</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-domains" data-aos="fade-right">
                    <h2 className="skills-domains-header">UI/UX</h2>
                    <div className="skills-list">
                        <div className="skills-a">
                            <h3>Medium</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/photoshop_logo.png" title='Adobe Photoshop' alt="#" className="skills-image" />
                                    <p>Photoshop</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-a">
                            <h3>Basics</h3>
                            <div className="skills-sublist">
                                <div className="skills-content">
                                    <img src="/assets/icons/figma_logo.png" title='Figma' alt="#" className="skills-image" />
                                    <p>Figma</p>
                                </div>
                                <div className="skills-content">
                                    <img src="/assets/icons/xd_logo.png" title='Adobe XD' alt="#" className="skills-image" />
                                    <p>XD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;