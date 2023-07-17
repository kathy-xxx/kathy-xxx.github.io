function syncTimeRange(chart1, chart2) {
  chart1.timeScale().subscribeVisibleLogicalRangeChange((range) => {
    chart2.timeScale().setVisibleLogicalRange(range);
  });

  chart2.timeScale().subscribeVisibleLogicalRangeChange((range) => {
    chart1.timeScale().setVisibleLogicalRange(range);
  });
}
