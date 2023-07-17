function syncCrosshair(chart1, chart2) {
  chart1.subscribeCrosshairMove(crosssyncHandler1);
  function crosssyncHandler1(e) {
    if (e.time !== undefined) {
      var xx = chart2.timeScale().timeToCoordinate(e.time);
      chart2.setCrossHairXY(xx, 50, true);
    } else if (e.point !== undefined) {
      chart2.setCrossHairXY(e.point.x, 10, false);
    }
  }

  chart2.subscribeCrosshairMove(crossSyncHandler2);

  function crossSyncHandler2(e) {
    if (e.time !== undefined) {
      var xx = chart1.timeScale().timeToCoordinate(e.time);
      chart1.setCrossHairXY(xx, 50, true);
    } else if (e.point !== undefined) {
      chart1.setCrossHairXY(e.point.x, 100, false);
    }
  }
}
