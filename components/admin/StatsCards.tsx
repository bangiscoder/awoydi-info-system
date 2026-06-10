"use client";

/*
|--------------------------------------------------------------------------
| Dashboard Statistics
|--------------------------------------------------------------------------
*/

export default function StatsCards() {

  const stats = [
    {
      title:
        "Announcements",
      value: 12,
    },
    {
      title:
        "Users",
      value: 25,
    },
    {
      title:
        "Reads",
      value: 0,
    },
    {
      title:
        "Acknowledged",
      value: 0,
    },
    {
      title:
        "Comments",
      value: 0,
    },
  ];

  return (
    <section
      className="
        grid
        grid-cols-1
        md:grid-cols-5
        gap-4
        mb-8
      "
    >
      {stats.map(
        (item) => (
          <div
            key={item.title}
            className="
              bg-white
              p-5
              rounded-xl
              shadow
            "
          >
            <p
              className="
                text-gray-500
                text-sm
              "
            >
              {item.title}
            </p>

            <h3
              className="
                text-3xl
                font-bold
              "
            >
              {item.value}
            </h3>
          </div>
        )
      )}
    </section>
  );
}