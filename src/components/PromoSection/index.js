import React from "react";
import { connect } from "react-redux";
import _data from "../../state/data";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreateIcon from '@mui/icons-material/Create';
import DevicesIcon from '@mui/icons-material/Devices';

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      promo: _data.promo
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-section ptb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    {/* <span className="fas fa-concierge-bell icon-size-md color-secondary"></span> */}
                                    <PersonAddIcon fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Registrate</h5>
                                    <p className="mb-0">All components are built to be used in combination.</p>
                                </div>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" rel="noopener noreferrer" href="/#/signUp" >Registrarme</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <AddBusinessIcon fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Agrega tu Marca</h5>
                                    <p className="mb-0">Quick is optimized to work for most devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <CreateIcon fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Diseña tu campaña</h5>
                                    <p className="mb-0">Remain consistent while developing new features.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <DevicesIcon fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Monitorea tus campañas</h5>
                                    <p className="mb-0">Change a few variables and the whole theme adapts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(PromoSection);
