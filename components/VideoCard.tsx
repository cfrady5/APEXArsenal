type Props = { title: string; body: string; poster: string; embedUrl?: string };

export default function VideoCard({ title, body, poster, embedUrl }: Props) {
  return (
    <article className="media-card">
      <div className="media-card__poster">
        {embedUrl ? (
          <iframe src={embedUrl} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        ) : (
          <>
            <img src={poster} alt="" width={640} height={360} loading="lazy" />
            <span className="media-card__badge">Coming soon</span>
            <span className="media-card__play" aria-hidden="true" />
          </>
        )}
      </div>
      <div className="media-card__body">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </article>
  );
}
