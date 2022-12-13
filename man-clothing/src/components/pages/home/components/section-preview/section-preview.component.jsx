import GridLayout from '../../../../layout/grid/grid.component';
import PreviewAside from './conponents.js/preview-aside/preview-aside.conponent';
import PreviewWraper from './conponents.js/preview-wraper/preview-wraper.conponent';
import './section-preview.styles.scss';

const Preview = () => {
  return (
    <section className="section-preview">
			<div className="preview">
				<GridLayout>
						<div className="col col-8 col-preview-wrap">
							<PreviewWraper/>
						</div>
						<div className="col col-4 col-preview-aside">
							<PreviewAside/>
						</div>					
				</GridLayout>
			</div>
		</section>
  )
}

export default Preview;